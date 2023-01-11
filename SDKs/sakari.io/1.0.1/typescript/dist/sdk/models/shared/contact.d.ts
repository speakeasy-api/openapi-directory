import { SpeakeasyBase } from "../../../internal/utils";
import { Updated } from "./updated";
import { ErrorT } from "./error";
import { Tag } from "./tag";
export declare class ContactMobile extends SpeakeasyBase {
    country?: string;
    number?: string;
}
export declare class Contact extends SpeakeasyBase {
    attributes?: Record<string, any>;
    created?: Updated;
    email?: string;
    error?: ErrorT;
    firstName?: string;
    id?: string;
    lastName?: string;
    mobile?: ContactMobile;
    tags?: Tag[];
    updated?: Updated;
    valid?: boolean;
}
