import { SpeakeasyBase } from "../../../internal/utils";
/**
 * RequisitionSerializer.
**/
export declare class Requisition extends SpeakeasyBase {
    accounts?: string[];
    agreements?: string[];
    enduserId: string;
    id?: string;
    redirect: string;
    reference: string;
    status?: Record<string, any>;
    userLanguage?: string;
}
/**
 * RequisitionSerializer.
**/
export declare class RequisitionInput extends SpeakeasyBase {
    agreements?: string[];
    enduserId: string;
    redirect: string;
    reference: string;
    userLanguage?: string;
}
