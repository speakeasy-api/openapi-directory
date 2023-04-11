import { SpeakeasyBase } from "../../../internal/utils";
export declare class Address extends SpeakeasyBase {
    /**
     * ‘Attn.’ (if applicable). Only applicable for B2B customers.
     */
    attention?: string;
    /**
     * Customer’s city.
     */
    city?: string;
    /**
     * Customer’s country. This value overrides the purchase country if they are different. Should follow the standard of ISO 3166 alpha-2. E.g. GB, US, DE, SE.
     */
    country?: string;
    /**
     * Customer’s email address.
     */
    email?: string;
    /**
     * Customers family name in UTF-8 encoding.
     *
     * @remarks
     * Cannot be only numbers, must be more than 1 character.
     * Allowed special characters: -'’.
     * More information can be found [in this link](https://docs.klarna.com/klarna-payments/in-depth-knowledge/customer-data-requirements/#details-needed-per-market)
     */
    familyName?: string;
    /**
     * Customers given name in UTF-8 encoding.
     *
     * @remarks
     * Cannot be only numbers, must be more than 1 character.
     * Allowed special characters: -'’.
     * More information can be found [in this link](https://docs.klarna.com/klarna-payments/in-depth-knowledge/customer-data-requirements/#details-needed-per-market)
     */
    givenName?: string;
    /**
     * Organization name (if applicable). Only applicable for B2B customers.
     */
    organizationName?: string;
    /**
     * Phone number. Preferably a mobile phone number.
     */
    phone?: string;
    /**
     * Customer’s postal code. Validation according to Universal Postal Union addressing systems.
     *
     * @remarks
     * E.g. 12345, W1G OPW.
     */
    postalCode?: string;
    /**
     * Customer’s region or state - Mandatory for US and AU market. Validations according to ISO 3166-2 format, e.g. OH, NJ, etc.
     */
    region?: string;
    /**
     * Customer’s street address. Regional formatting is required, as follows:
     *
     * @remarks
     * UK/US/FR: 33 Cavendish Square
     * Rest of EU: De Ruijterkade 7
     */
    streetAddress?: string;
    /**
     * Customer’s street address. Second Line.
     */
    streetAddress2?: string;
    /**
     * Customer’s Title. Allowed values per country:
     *
     * @remarks
     * UK - "Mr", "Ms"
     * DE - "Herr", "Frau"
     * AT: "Herr, "Frau"
     * CH: de-CH: "Herr, "Frau" it-CH: "Sig.", "Sig.ra" fr-CH: "M", "Mme"
     * BE: "Dhr.", "Mevr."
     * NL: "Dhr.", "Mevr."
     */
    title?: string;
}
