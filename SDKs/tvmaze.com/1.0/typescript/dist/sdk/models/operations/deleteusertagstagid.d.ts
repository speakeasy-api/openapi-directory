import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class DeleteUserTagsTagIdRequest extends SpeakeasyBase {
    tagId: number;
}
export declare class DeleteUserTagsTagIdResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
