import { SpeakeasyBase } from "../../../internal/utils";
import { FetchMetaResponse } from "./fetchmetaresponse";
import { OrganizationResource } from "./organizationresource";
/**
 * OK
 */
export declare class FetchOrganizationResponse extends SpeakeasyBase {
    data: OrganizationResource;
    meta?: FetchMetaResponse;
}
