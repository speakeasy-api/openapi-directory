import { SpeakeasyBase } from "../../../internal/utils";
export declare class DeleteTagPathParams extends SpeakeasyBase {
    projectId: string;
    tagId: string;
}
export declare class DeleteTagRequest extends SpeakeasyBase {
    pathParams: DeleteTagPathParams;
}
export declare class DeleteTagResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
