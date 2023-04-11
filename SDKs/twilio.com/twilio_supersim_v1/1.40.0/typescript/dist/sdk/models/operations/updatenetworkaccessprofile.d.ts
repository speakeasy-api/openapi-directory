import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const UpdateNetworkAccessProfileServerList: readonly ["https://supersim.twilio.com"];
export declare class UpdateNetworkAccessProfileSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class UpdateNetworkAccessProfileUpdateNetworkAccessProfileRequest extends SpeakeasyBase {
    /**
     * The new unique name of the Network Access Profile.
     */
    uniqueName?: string;
}
export declare class UpdateNetworkAccessProfileRequest extends SpeakeasyBase {
    requestBody?: UpdateNetworkAccessProfileUpdateNetworkAccessProfileRequest;
    /**
     * The SID of the Network Access Profile to update.
     */
    sid: string;
}
export declare class UpdateNetworkAccessProfileResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    supersimV1NetworkAccessProfile?: shared.SupersimV1NetworkAccessProfile;
}
