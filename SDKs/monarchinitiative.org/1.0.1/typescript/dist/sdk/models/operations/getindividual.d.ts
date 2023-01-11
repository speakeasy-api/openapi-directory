import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetIndividualPathParams extends SpeakeasyBase {
    id: string;
}
export declare class GetIndividualRequest extends SpeakeasyBase {
    pathParams: GetIndividualPathParams;
}
export declare class GetIndividualResponse extends SpeakeasyBase {
    associations?: shared.Association[];
    contentType: string;
    statusCode: number;
}
