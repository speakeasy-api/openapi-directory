import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetEndpointsResponse extends SpeakeasyBase {
    contentType: string;
    error?: shared.ErrorT;
    statusCode: number;
    getEndpoints200ApplicationJSONObject?: Record<string, any>;
}
