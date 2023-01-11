import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CreateTagPathParams extends SpeakeasyBase {
    projectId: string;
}
export declare enum CreateTagTypeEnum {
    Regular = "Regular",
    Negative = "Negative"
}
export declare class CreateTagQueryParams extends SpeakeasyBase {
    description?: string;
    name: string;
    type?: CreateTagTypeEnum;
}
export declare class CreateTagRequest extends SpeakeasyBase {
    pathParams: CreateTagPathParams;
    queryParams: CreateTagQueryParams;
}
export declare class CreateTagResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    customVisionError?: shared.CustomVisionError;
    statusCode: number;
    tag?: shared.Tag;
}
