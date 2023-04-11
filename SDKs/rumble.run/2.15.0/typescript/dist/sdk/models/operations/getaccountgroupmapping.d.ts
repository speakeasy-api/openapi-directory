import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetAccountGroupMappingSecurity extends SpeakeasyBase {
    bearerAuth: string;
}
export declare class GetAccountGroupMappingRequest extends SpeakeasyBase {
    /**
     * UUID of the SSO group mapping
     */
    groupMappingId: string;
}
export declare class GetAccountGroupMappingResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
