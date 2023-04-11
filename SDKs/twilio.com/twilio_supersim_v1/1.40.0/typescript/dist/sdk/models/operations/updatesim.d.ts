import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const UpdateSimServerList: readonly ["https://supersim.twilio.com"];
export declare class UpdateSimSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
/**
 * The HTTP method we should use to call `callback_url`. Can be: `GET` or `POST` and the default is POST.
 */
export declare enum UpdateSimUpdateSimRequestCallbackMethodEnum {
    Head = "HEAD",
    Get = "GET",
    Post = "POST",
    Patch = "PATCH",
    Put = "PUT",
    Delete = "DELETE"
}
export declare class UpdateSimUpdateSimRequest extends SpeakeasyBase {
    /**
     * The SID of the Account to which the Sim resource should belong. The Account SID can only be that of the requesting Account or that of a Subaccount of the requesting Account. Only valid when the Sim resource's status is new.
     */
    accountSid?: string;
    /**
     * The HTTP method we should use to call `callback_url`. Can be: `GET` or `POST` and the default is POST.
     */
    callbackMethod?: UpdateSimUpdateSimRequestCallbackMethodEnum;
    /**
     * The URL we should call using the `callback_method` after an asynchronous update has finished.
     */
    callbackUrl?: string;
    /**
     * The SID or unique name of the Fleet to which the SIM resource should be assigned.
     */
    fleet?: string;
    status?: shared.SimEnumStatusUpdateEnum;
    /**
     * An application-defined string that uniquely identifies the resource. It can be used in place of the resource's `sid` in the URL to address the resource.
     */
    uniqueName?: string;
}
export declare class UpdateSimRequest extends SpeakeasyBase {
    requestBody?: UpdateSimUpdateSimRequest;
    /**
     * The SID of the Sim resource to update.
     */
    sid: string;
}
export declare class UpdateSimResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    supersimV1Sim?: shared.SupersimV1Sim;
}
