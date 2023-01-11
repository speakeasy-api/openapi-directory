import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetPedigreePathParams extends SpeakeasyBase {
    id: string;
}
export declare class GetPedigreeRequest extends SpeakeasyBase {
    pathParams: GetPedigreePathParams;
}
export declare class GetPedigreeResponse extends SpeakeasyBase {
    associations?: shared.Association[];
    contentType: string;
    statusCode: number;
}
