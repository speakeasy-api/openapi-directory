import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetEntitySetHomologsQueryParams extends SpeakeasyBase {
    subject?: string[];
}
export declare class GetEntitySetHomologsRequest extends SpeakeasyBase {
    queryParams: GetEntitySetHomologsQueryParams;
}
export declare class GetEntitySetHomologsResponse extends SpeakeasyBase {
    associationResults?: shared.AssociationResults[];
    contentType: string;
    statusCode: number;
}
