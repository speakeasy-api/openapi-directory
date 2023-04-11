import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class SessionControllerCreateLandlordLoginRequest extends SpeakeasyBase {
    /**
     * (Optional) The branch ID linked to the login. This will determine which in tray the request display in
     */
    branchID?: string;
    /**
     * Contact details of the landlord
     */
    contactDetails: string;
    /**
     * The email address of the landlord
     */
    email: string;
    /**
     * The forename of the landlord
     */
    forename: string;
    /**
     * Address of the property linked to the landlord
     */
    propertyAddress: string;
    /**
     * The unique client short-name
     */
    shortName: string;
    /**
     * The surname of the landlord
     */
    surname: string;
    /**
     * The title of the landlord
     */
    title: string;
}
export declare class SessionControllerCreateLandlordLoginResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
