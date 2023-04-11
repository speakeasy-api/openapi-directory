import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const CreateCredentialListServerList: readonly ["https://trunking.twilio.com"];
export declare class CreateCredentialListSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class CreateCredentialListCreateCredentialListRequest extends SpeakeasyBase {
    /**
     * The SID of the [Credential List](https://www.twilio.com/docs/voice/sip/api/sip-credentiallist-resource) that you want to associate with the trunk. Once associated, we will authenticate access to the trunk against this list.
     */
    credentialListSid: string;
}
export declare class CreateCredentialListRequest extends SpeakeasyBase {
    requestBody?: CreateCredentialListCreateCredentialListRequest;
    /**
     * The SID of the Trunk to associate the credential list with.
     */
    trunkSid: string;
}
export declare class CreateCredentialListResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Created
     */
    trunkingV1TrunkCredentialList?: shared.TrunkingV1TrunkCredentialList;
}
