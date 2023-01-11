import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetVariantAnalyzePathParams extends SpeakeasyBase {
    id: string;
}
export declare class GetVariantAnalyzeRequest extends SpeakeasyBase {
    pathParams: GetVariantAnalyzePathParams;
}
export declare class GetVariantAnalyzeResponse extends SpeakeasyBase {
    associations?: shared.Association[];
    contentType: string;
    statusCode: number;
}
