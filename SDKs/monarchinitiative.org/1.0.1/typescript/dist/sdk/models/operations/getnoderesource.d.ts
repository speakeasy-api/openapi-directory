import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetNodeResourcePathParams extends SpeakeasyBase {
    id: string;
}
export declare class GetNodeResourceRequest extends SpeakeasyBase {
    pathParams: GetNodeResourcePathParams;
}
export declare class GetNodeResourceResponse extends SpeakeasyBase {
    bioObjects?: shared.BioObject[];
    contentType: string;
    statusCode: number;
}
