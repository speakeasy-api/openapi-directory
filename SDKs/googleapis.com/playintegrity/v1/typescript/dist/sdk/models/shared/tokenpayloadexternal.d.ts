import { SpeakeasyBase } from "../../../internal/utils";
import { AccountDetails } from "./accountdetails";
import { AppIntegrity } from "./appintegrity";
import { DeviceIntegrity } from "./deviceintegrity";
import { RequestDetails } from "./requestdetails";
import { TestingDetails } from "./testingdetails";
/**
 * Contains basic app information and integrity signals like device attestation and licensing details.
 */
export declare class TokenPayloadExternal extends SpeakeasyBase {
    /**
     * Contains the account information such as the licensing status for the user in the scope.
     */
    accountDetails?: AccountDetails;
    /**
     * Contains the application integrity information.
     */
    appIntegrity?: AppIntegrity;
    /**
     * Contains the device attestation information.
     */
    deviceIntegrity?: DeviceIntegrity;
    /**
     * Contains the integrity request information.
     */
    requestDetails?: RequestDetails;
    /**
     * Contains additional information generated for testing responses.
     */
    testingDetails?: TestingDetails;
}
