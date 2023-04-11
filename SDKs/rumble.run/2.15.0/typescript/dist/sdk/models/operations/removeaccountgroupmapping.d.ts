import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class RemoveAccountGroupMappingSecurity extends SpeakeasyBase {
    bearerAuth: string;
}
export declare class RemoveAccountGroupMappingRequest extends SpeakeasyBase {
    /**
     * UUID of the SSO group mapping
     */
    groupMappingId: string;
}
export declare class RemoveAccountGroupMappingResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
