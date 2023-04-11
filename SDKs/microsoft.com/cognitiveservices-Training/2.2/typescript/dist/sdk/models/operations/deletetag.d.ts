import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class DeleteTagRequest extends SpeakeasyBase {
    trainingKey: string;
    /**
     * The project id.
     */
    projectId: string;
    /**
     * Id of the tag to be deleted.
     */
    tagId: string;
}
export declare class DeleteTagResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
