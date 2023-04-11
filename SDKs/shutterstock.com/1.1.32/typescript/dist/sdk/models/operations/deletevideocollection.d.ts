import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class DeleteVideoCollectionSecurity extends SpeakeasyBase {
    customerAccessCode: string;
}
export declare class DeleteVideoCollectionRequest extends SpeakeasyBase {
    /**
     * The ID of the collection to delete
     */
    id: string;
}
export declare class DeleteVideoCollectionResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
