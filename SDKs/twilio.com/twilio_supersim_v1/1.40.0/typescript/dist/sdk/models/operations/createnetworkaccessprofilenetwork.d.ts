import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const CreateNetworkAccessProfileNetworkServerList: readonly ["https://supersim.twilio.com"];
export declare class CreateNetworkAccessProfileNetworkSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class CreateNetworkAccessProfileNetworkCreateNetworkAccessProfileNetworkRequest extends SpeakeasyBase {
    /**
     * The SID of the Network resource to be added to the Network Access Profile resource.
     */
    network: string;
}
export declare class CreateNetworkAccessProfileNetworkRequest extends SpeakeasyBase {
    /**
     * The unique string that identifies the Network Access Profile resource.
     */
    networkAccessProfileSid: string;
    requestBody?: CreateNetworkAccessProfileNetworkCreateNetworkAccessProfileNetworkRequest;
}
export declare class CreateNetworkAccessProfileNetworkResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Created
     */
    supersimV1NetworkAccessProfileNetworkAccessProfileNetwork?: shared.SupersimV1NetworkAccessProfileNetworkAccessProfileNetwork;
}
