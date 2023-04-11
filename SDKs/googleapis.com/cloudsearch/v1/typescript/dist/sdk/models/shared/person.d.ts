import { SpeakeasyBase } from "../../../internal/utils";
import { EmailAddress } from "./emailaddress";
import { Name } from "./name";
import { PhoneNumber } from "./phonenumber";
import { Photo } from "./photo";
/**
 * Object to represent a person.
 */
export declare class Person extends SpeakeasyBase {
    /**
     * The person's email addresses
     */
    emailAddresses?: EmailAddress[];
    /**
     * The resource name of the person to provide information about. See [`People.get`](https://developers.google.com/people/api/rest/v1/people/get) from the Google People API.
     */
    name?: string;
    /**
     * Obfuscated ID of a person.
     */
    obfuscatedId?: string;
    /**
     * The person's name
     */
    personNames?: Name[];
    /**
     * The person's phone numbers
     */
    phoneNumbers?: PhoneNumber[];
    /**
     * A person's read-only photo. A picture shown next to the person's name to help others recognize the person in search results.
     */
    photos?: Photo[];
}
