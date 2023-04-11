import { SpeakeasyBase } from "../../../internal/utils";
/**
 * returns Array of Click models, also returns lastId
 */
export declare class ClickModelPg extends SpeakeasyBase {
    accountId?: string;
    alias?: string;
    aliasId?: string;
    browser?: string;
    country?: string;
    createdAt?: number;
    destination?: string;
    domain?: string;
    id?: number;
    os?: string;
    referrer?: string;
    userAgent?: string;
}
