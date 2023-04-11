import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class PreprintsContributorReadRequest extends SpeakeasyBase {
    /**
     * The unique identifier of the Preprint.
     */
    preprintId: string;
    /**
     * The unique identifier of the user.
     */
    userId: string;
}
export declare class PreprintsContributorReadResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
