import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class RetrieveAccountMetadataRequest extends SpeakeasyBase {
    id: string;
}
export declare class RetrieveAccountMetadataResponse extends SpeakeasyBase {
    /**
     * sample account metadata
     */
    accountV2?: shared.AccountV2;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    retrieveAccountMetadata401ApplicationJSONObject?: Record<string, any>;
    retrieveAccountMetadata403ApplicationJSONObject?: Record<string, any>;
    /**
     * Account not found
     */
    retrieveAccountMetadata404ApplicationJSONObject?: Record<string, any>;
}
