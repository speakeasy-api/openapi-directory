import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetEarningsResponse extends SpeakeasyBase {
    contentType: string;
    earnings?: shared.Earnings;
    error?: shared.ErrorT;
    statusCode: number;
}
