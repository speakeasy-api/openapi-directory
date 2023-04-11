import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class DeleteImageCollectionSecurity extends SpeakeasyBase {
    customerAccessCode: string;
}
export declare class DeleteImageCollectionRequest extends SpeakeasyBase {
    /**
     * Collection ID
     */
    id: string;
}
export declare class DeleteImageCollectionResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
