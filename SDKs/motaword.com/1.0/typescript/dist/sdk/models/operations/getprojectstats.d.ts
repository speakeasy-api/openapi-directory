import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetProjectStatsResponse extends SpeakeasyBase {
    clientProjectStats?: shared.ClientProjectStats;
    contentType: string;
    error?: shared.ErrorT;
    statusCode: number;
}
