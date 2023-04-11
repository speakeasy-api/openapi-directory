import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetAssociationObjectRequest extends SpeakeasyBase {
    /**
     * identifier for an association, e.g. f5ba436c-f851-41b3-9d9d-bb2b5fc879d4
     */
    id: string;
}
export declare class GetAssociationObjectResponse extends SpeakeasyBase {
    /**
     * Success
     */
    associationResults?: shared.AssociationResults[];
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
