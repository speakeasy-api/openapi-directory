import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetDlQueryPathParams extends SpeakeasyBase {
    query: string;
}
export declare class GetDlQueryRequest extends SpeakeasyBase {
    pathParams: GetDlQueryPathParams;
}
export declare class GetDlQueryResponse extends SpeakeasyBase {
    associations?: shared.Association[];
    contentType: string;
    statusCode: number;
}
