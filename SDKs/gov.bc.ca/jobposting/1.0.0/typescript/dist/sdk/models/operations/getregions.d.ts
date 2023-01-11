import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetRegionsResponse extends SpeakeasyBase {
    contentType: string;
    error?: shared.ErrorT;
    regions?: shared.Region[];
    statusCode: number;
}
