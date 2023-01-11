import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetIdentifierMapperPathParams extends SpeakeasyBase {
    source: string;
    target: string;
}
export declare class GetIdentifierMapperRequest extends SpeakeasyBase {
    pathParams: GetIdentifierMapperPathParams;
}
export declare class GetIdentifierMapperResponse extends SpeakeasyBase {
    associations?: shared.Association[];
    contentType: string;
    statusCode: number;
}
