import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Contains the list of servers available to the SDK
 */
export declare const ServerList: readonly ["https://api.peoplefinderspro.com"];
/**
 * The available configuration options for the SDK
 */
export type SDKProps = {
    /**
     * Allows overriding the default axios client used by the SDK
     */
    defaultClient?: AxiosInstance;
    /**
     * Allows overriding the default server URL used by the SDK
     */
    serverURL?: string;
};
/**
 * Self Service Developer API documentation and demo.
 *
 * @remarks
 *
 * ##Getting Started
 *
 * You will need an API access profile user and password in order to access search endpoints.
 * Your access profile user and password is used for authenticating all requests to our search API.
 * You MUST pass the user and password each time you perform a search request.
 */
export declare class SDK {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    private _globals;
    constructor(props?: SDKProps);
    /**
     * Search
     *
     * @remarks
     * ###### *Click on the grey search box above, to view sample request/response objects for the Identity Verification Search*
     *
     * Perform a search:
     *
     * 1. Add your key and key secret to the request headers.
     *     + galaxy-ap-name: [Key]
     *     + galaxy-ap-password: [Secret]
     *     + galaxy-search-type: DevAPIIDVerification
     *
     * 2.  Add search criteria to your request. At least two are required: SSN, Name, Phone, Address or Email.
     *     ~~~html
     *             {
     *                 "FirstName": "John",
     *                 "MiddleName": "T",
     *                 "LastName": "Lawrence",
     *                 "Dob":"",
     *                 "Age": 0,
     *                 "Address": {
     *                     "addressLine1":"123 Q Street, Unit 102",
     *                     "addressLine2":"Sacramento, CA"
     *                 },
     *                 "PhoneNumber":"",
     *                 "Email":""
     *             }
     *     ~~~
     *
     * 3.  Submit your search
     *
     * A complete list of JSON request properties follows.
     *
     * + <code>FirstName</code>= null (optional, string) ... First name.
     *
     * + <code>MiddleName</code> = null (optional, string) ... Middle name or middle initial.
     *
     * + <code>LastName</code> = null (optional, string) ... Last name.
     *
     * + <code>Dob</code> = null (optional, string) ... Date of birth (format: MM/DD/YYYY).
     *
     * + <code>Age</code> = null (optional, int) ... Age.
     *
     * + <code>Addresses</code> = null (optional, Addresses[]) ... List of addresses.
     *     + <code>Members</code>
     *         + <code>AddressLine1</code> = null (optional, string) ... House number, street name and Unit number (i.e. 123 Q Street, Unit 102) or PO Box (i.e. 1821 Q Street).
     *         + <code>AddressLine2</code> = null (optional, string) ... State or City and State or Zip (i.e. Sacramento, CA).
     *
     * + <code>Phone</code> = null (optional, string) ... Phone number (formats: ###-###-####, (###) ###-####).
     *
     * + <code>Email</code> = null (optional, string) ... E-mail address.
     */
    search(req: operations.SearchRequest, config?: AxiosRequestConfig): Promise<operations.SearchResponse>;
    /**
     * Search
     *
     * @remarks
     * ###### *Click on the grey search box above, to view sample request/response objects for Address Autocomplete Search*
     *
     * Perform a search:
     *
     * 1. Add your key and key secret to the request headers.
     *     + galaxy-ap-name: [Key]
     *     + galaxy-ap-password: [Secret]
     *     + galaxy-search-type: DevAPIAddressAutoComplete
     *
     * 2.  Add search criteria to your request.
     *     ~~~html
     *             {
     *                 "Input":"1821 Q"
     *             }
     *     ~~~
     *
     * 3.  Submit your search
     *
     * The JSON request should have parts of the address.
     *
     * + <code>Input</code> = null (optional, string) ... address.
     */
    postAddressAutocomplete(req: operations.PostAddressAutocompleteRequest, config?: AxiosRequestConfig): Promise<operations.PostAddressAutocompleteResponse>;
    /**
     * Search
     *
     * @remarks
     * ###### *Click on the grey search box above, to view sample request/response objects for Contact Enrichment Search*
     *
     * Perform a search:
     *
     * 1. Add your key and key secret to the request headers.
     *     + galaxy-ap-name: [Key]
     *     + galaxy-ap-password: [Secret]
     *     + galaxy-search-type: DevAPIContactEnrich
     *
     * 2.  Add search criteria to your request. At least two are required: Name, Phone, Address, or Email.
     *     ~~~html
     *             {
     *                 "FirstName": "John",
     *                 "MiddleName": "T",
     *                 "LastName": "Lawrence",
     *                 "Dob":"",
     *                 "Age": 0,
     *                 "Address": {
     *                     "addressLine1":"123 Q Street",
     *                     "addressLine2":"Sacramento, CA"
     *                 },
     *                 "PhoneNumber":"",
     *                 "Email":""
     *             }
     *     ~~~
     *
     * 3.  Submit your search
     *
     * A complete list of JSON request properties follows.
     *
     * + <code>FirstName</code>= null (optional, string) ... First name.
     *
     * + <code>MiddleName</code> = null (optional, string) ... Middle name or middle initial.
     *
     * + <code>LastName</code> = null (optional, string) ... Last name.
     *
     * + <code>Dob</code> = null (optional, string) ... Date of birth (format: MM/DD/YYYY).
     *
     * + <code>Age</code> = null (optional, int) ... Age.
     *
     * + <code>Addresses</code> = null (optional, Addresses[]) ... List of addresses.
     *     + <code>Members</code>
     *         + <code>AddressLine1</code> = null (optional, string) ... House number, street name and Unit number (i.e. 123 Q Street, Unit 102) or PO Box (i.e. 1821 Q Street).
     *         + <code>AddressLine2</code> = null (optional, string) ... State or City and State or Zip (i.e. Sacramento, CA).
     *
     * + <code>Phone</code> = null (optional, string) ... Phone number (formats: ###-###-####, (###) ###-####).
     *
     * + <code>Email</code> = null (optional, string) ... E-mail address.
     */
    postContactEnrich(req: operations.PostContactEnrichRequest, config?: AxiosRequestConfig): Promise<operations.PostContactEnrichResponse>;
    /**
     * Search
     *
     * @remarks
     * ###### *Click on the grey search box above, to view sample request/response objects for Email Enrichment Search*
     *
     * Perform a search:
     *
     * 1. Add your Access Profile username and password to the request headers.
     *     + galaxy-ap-name: [Key]
     *     + galaxy-ap-password: [Secret]
     *     + galaxy-search-type: DevAPIEmailID
     *
     * 2.  Add search criteria to your request.
     *     ~~~html
     *             {
     *                 "Email":"johnsmith@somedomain"
     *             }
     *     ~~~
     *
     * 3.  Submit your search
     *
     * The JSON request should have an email.
     *
     * + <code>Email</code> = null (optional, string) ... E-mail address.
     */
    postEmailEnrich(req: operations.PostEmailEnrichRequest, config?: AxiosRequestConfig): Promise<operations.PostEmailEnrichResponse>;
    /**
     * Search
     *
     * @remarks
     * ###### *Click on the grey search box above, to view sample request/response objects for Phone Enrichment Search*
     *
     * Perform a search:
     *
     * 1. Add your key and key secret to the request headers.
     *     + galaxy-ap-name: [Key]
     *     + galaxy-ap-password: [Secret]
     *     + galaxy-search-type: DevAPICallerID
     *
     * 2.  Add search criteria to your request.
     *     ~~~html
     *             {
     *                 "Phone":"(123) 456-7890"
     *             }
     *     ~~~
     *
     * 3.  Submit your search
     *
     * The JSON request should have a phone number.
     *
     * + <code>Phone</code> = null (optional, string) ... Phone number (formats: ###-###-####, (###) ###-####).
     */
    postPhoneEnrich(req: operations.PostPhoneEnrichRequest, config?: AxiosRequestConfig): Promise<operations.PostPhoneEnrichResponse>;
}
