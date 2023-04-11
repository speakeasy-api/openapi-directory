import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const CreateNetworkAccessProfileServerList: readonly ["https://supersim.twilio.com"];
export declare class CreateNetworkAccessProfileSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class CreateNetworkAccessProfileCreateNetworkAccessProfileRequest extends SpeakeasyBase {
    /**
     * List of Network SIDs that this Network Access Profile will allow connections to.
     */
    networks?: string[];
    /**
     * An application-defined string that uniquely identifies the resource. It can be used in place of the resource's `sid` in the URL to address the resource.
     */
    uniqueName?: string;
}
export declare class CreateNetworkAccessProfileResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Created
     */
    supersimV1NetworkAccessProfile?: shared.SupersimV1NetworkAccessProfile;
}
