import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetIndustriesResponse extends SpeakeasyBase {
    contentType: string;
    error?: shared.ErrorT;
    industries?: shared.Industry[];
    statusCode: number;
}
