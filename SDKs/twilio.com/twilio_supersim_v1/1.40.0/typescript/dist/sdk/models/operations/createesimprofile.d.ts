import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const CreateEsimProfileServerList: readonly ["https://supersim.twilio.com"];
export declare class CreateEsimProfileSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
/**
 * The HTTP method we should use to call `callback_url`. Can be: `GET` or `POST` and the default is POST.
 */
export declare enum CreateEsimProfileCreateEsimProfileRequestCallbackMethodEnum {
    Head = "HEAD",
    Get = "GET",
    Post = "POST",
    Patch = "PATCH",
    Put = "PUT",
    Delete = "DELETE"
}
export declare class CreateEsimProfileCreateEsimProfileRequest extends SpeakeasyBase {
    /**
     * The HTTP method we should use to call `callback_url`. Can be: `GET` or `POST` and the default is POST.
     */
    callbackMethod?: CreateEsimProfileCreateEsimProfileRequestCallbackMethodEnum;
    /**
     * The URL we should call using the `callback_method` when the status of the eSIM Profile changes. At this stage of the eSIM Profile pilot, the a request to the URL will only be called when the ESimProfile resource changes from `reserving` to `available`.
     */
    callbackUrl?: string;
    /**
     * Identifier of the eUICC that will claim the eSIM Profile.
     */
    eid?: string;
    /**
     * When set to `true`, a value for `Eid` does not need to be provided. Instead, when the eSIM profile is reserved, a matching ID will be generated and returned via the `matching_id` property. This identifies the specific eSIM profile that can be used by any capable device to claim and download the profile.
     */
    generateMatchingId?: boolean;
}
export declare class CreateEsimProfileResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Created
     */
    supersimV1EsimProfile?: shared.SupersimV1EsimProfile;
}
