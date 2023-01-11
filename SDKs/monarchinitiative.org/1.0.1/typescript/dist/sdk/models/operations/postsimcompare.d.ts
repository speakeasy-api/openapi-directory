import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PostSimCompareRequest extends SpeakeasyBase {
    request: shared.CompareInput;
}
export declare class PostSimCompareResponse extends SpeakeasyBase {
    contentType: string;
    simResult?: shared.SimResult;
    statusCode: number;
}
