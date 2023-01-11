import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetStatsResponse extends SpeakeasyBase {
    contentType: string;
    error?: shared.ErrorT;
    stats?: shared.Stats;
    statusCode: number;
}
