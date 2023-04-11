import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The emergency contact model
 */
export declare class EmergencyContact extends SpeakeasyBase {
    /**
     * 1st address line.
     */
    address1?: string;
    /**
     * 2nd address line.
     */
    address2?: string;
    /**
     * City.
     */
    city?: string;
    /**
     * County.
     */
    country?: string;
    /**
     * Country.  Must be a valid 3 character country code.  Common values are *USA* (United States), *CAN* (Canada).
     */
    county?: string;
    /**
     * Contact email.  Must be valid email address format.
     */
    email?: string;
    /**
     * Required. Contact first name. <br  />Max length: 40
     */
    firstName: string;
    /**
     * Contact Home Phone.  Valid phone format  *(###) #######* or *######-####* or *### ### ####* or *##########* or, if international, starts with *+#*, only spaces and digits allowed.
     */
    homePhone?: string;
    /**
     * Required. Contact last name. <br  />Max length: 40
     */
    lastName: string;
    /**
     * Contact Mobile Phone.  Valid phone format  *(###) #######* or *######-####* or *### ### ####* or *##########* or, if international, starts with *+#*, only spaces and digits allowed.
     */
    mobilePhone?: string;
    /**
     * Notes. <br  />Max length: 1000
     */
    notes?: string;
    /**
     * Contact Pager.  Valid phone format  *(###) #######* or *######-####* or *### ### ####* or *##########* or, if international, starts with *+#*, only spaces and digits allowed.
     */
    pager?: string;
    /**
     * Required. Contact primary phone type.  Must match Company setup.  Valid  values are H (Home), M (Mobile), P (Pager), W (Work)
     */
    primaryPhone?: string;
    /**
     * Required. Contact priority. Valid values are *P* (Primary) or *S* (Secondary).
     */
    priority?: string;
    /**
     * Required. Contact relationship.  Must match Company setup.  Common values are Spouse, Mother, Father.
     */
    relationship?: string;
    /**
     * State or Province.  If U.S. address, must be valid 2 character state code.  Common values are *IL* (Illinois), *CA* (California).
     */
    state?: string;
    /**
     * Valid values are *true* or *false*.
     */
    syncEmployeeInfo?: boolean;
    /**
     * Work Extension.
     */
    workExtension?: string;
    /**
     * Contact Work Phone.  Valid phone format  *(###) #######* or *######-####* or *### ### ####* or *##########* or, if international, starts with *+#*, only spaces and digits allowed.
     */
    workPhone?: string;
    /**
     * Postal code.  If U.S. address, must be a valid zip code.
     */
    zip?: string;
}
