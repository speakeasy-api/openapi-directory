import { SpeakeasyBase } from "../../../internal/utils";
import { DimensionValue } from "./dimensionvalue";
import { SiteContact } from "./sitecontact";
import { SiteSettings } from "./sitesettings";
import { SiteVideoSettings } from "./sitevideosettings";
/**
 * Contains properties of a site.
 */
export declare class Site extends SpeakeasyBase {
    /**
     * Account ID of this site. This is a read-only field that can be left blank.
     */
    accountId?: string;
    /**
     * Whether this site is approved.
     */
    approved?: boolean;
    /**
     * Directory site associated with this site. This is a required field that is read-only after insertion.
     */
    directorySiteId?: string;
    /**
     * Represents a DimensionValue resource.
     */
    directorySiteIdDimensionValue?: DimensionValue;
    /**
     * ID of this site. This is a read-only, auto-generated field.
     */
    id?: string;
    /**
     * Represents a DimensionValue resource.
     */
    idDimensionValue?: DimensionValue;
    /**
     * Key name of this site. This is a read-only, auto-generated field.
     */
    keyName?: string;
    /**
     * Identifies what kind of resource this is. Value: the fixed string "dfareporting#site".
     */
    kind?: string;
    /**
     * Name of this site.This is a required field. Must be less than 128 characters long. If this site is under a subaccount, the name must be unique among sites of the same subaccount. Otherwise, this site is a top-level site, and the name must be unique among top-level sites of the same account.
     */
    name?: string;
    /**
     * Site contacts.
     */
    siteContacts?: SiteContact[];
    /**
     * Site Settings
     */
    siteSettings?: SiteSettings;
    /**
     * Subaccount ID of this site. This is a read-only field that can be left blank.
     */
    subaccountId?: string;
    /**
     * Video Settings
     */
    videoSettings?: SiteVideoSettings;
}
