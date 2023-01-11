import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetEvidenceGraphObjectPathParams extends SpeakeasyBase {
    id: string;
}
export declare class GetEvidenceGraphObjectRequest extends SpeakeasyBase {
    pathParams: GetEvidenceGraphObjectPathParams;
}
export declare class GetEvidenceGraphObjectResponse extends SpeakeasyBase {
    contentType: string;
    graphs?: shared.Graph[];
    statusCode: number;
}
