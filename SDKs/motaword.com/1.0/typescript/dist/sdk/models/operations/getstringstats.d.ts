import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetStringStatsResponse extends SpeakeasyBase {
    clientStringStats?: shared.ClientStringStats;
    contentType: string;
    error?: shared.ErrorT;
    statusCode: number;
}
