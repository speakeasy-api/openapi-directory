import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class V2 {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * getAcmeExternalAccountBinding - Retrieves the external account binding for the specified customer
     *
     * Use this endpoint to retrieve a key identifier and Hash-based Message Authentication Code (HMAC) key for Automated Certificate Management Environment (ACME) External Account Binding (EAB). These credentials can be used with an ACME client that supports EAB (ex. CertBot) to automate the issuance request and deployment of DV SSL certificates
    **/
    getAcmeExternalAccountBinding(req: operations.GetAcmeExternalAccountBindingRequest, config?: AxiosRequestConfig): Promise<operations.GetAcmeExternalAccountBindingResponse>;
    /**
     * getCertificateDetailByCertIdentifier - Retrieve individual certificate details
     *
     * Once the certificate order has been created, this method can be used to check the status of the certificate. This method can also be used to retrieve details of the certificate. <ul><li>**shopperId** is **not the same** as **customerId**. **shopperId** is a number of max length 10 digits (*ex:* 1234567890) whereas **customerId** is a UUIDv4 (*ex:* 295e3bc3-b3b9-4d95-aae5-ede41a994d13)</li></ul>
    **/
    getCertificateDetailByCertIdentifier(req: operations.GetCertificateDetailByCertIdentifierRequest, config?: AxiosRequestConfig): Promise<operations.GetCertificateDetailByCertIdentifierResponse>;
    /**
     * getCustomerCertificatesByCustomerId - Retrieve customer's certificates
     *
     * This method can be used to retrieve a list of certificates for a specified customer. <ul><li>**shopperId** is **not the same** as **customerId**.  **shopperId** is a number of max length 10 digits (*ex:* 1234567890) whereas **customerId** is a UUIDv4 (*ex:* 295e3bc3-b3b9-4d95-aae5-ede41a994d13)</li></ul>
    **/
    getCustomerCertificatesByCustomerId(req: operations.GetCustomerCertificatesByCustomerIdRequest, config?: AxiosRequestConfig): Promise<operations.GetCustomerCertificatesByCustomerIdResponse>;
    /**
     * getDomainDetailsByDomain - Retrieve detailed information for supplied domain
     *
     * Retrieve detailed information for supplied domain, including domain verification details and Certificate Authority Authorization (CAA) verification details. <ul><li>**shopperId** is **not the same** as **customerId**.  **shopperId** is a number of max length 10 digits (*ex:* 1234567890) whereas **customerId** is a UUIDv4 (*ex:* 295e3bc3-b3b9-4d95-aae5-ede41a994d13)</li></ul>
    **/
    getDomainDetailsByDomain(req: operations.GetDomainDetailsByDomainRequest, config?: AxiosRequestConfig): Promise<operations.GetDomainDetailsByDomainResponse>;
    /**
     * getDomainInformationByCertificateId - Retrieve domain verification status
     *
     * This method can be used to retrieve the domain verification status for a certificate request.<ul><li>**shopperId** is **not the same** as **customerId**.  **shopperId** is a number of max length 10 digits (*ex:* 1234567890) whereas **customerId** is a UUIDv4 (*ex:* 295e3bc3-b3b9-4d95-aae5-ede41a994d13)</li></ul>"
    **/
    getDomainInformationByCertificateId(req: operations.GetDomainInformationByCertificateIdRequest, config?: AxiosRequestConfig): Promise<operations.GetDomainInformationByCertificateIdResponse>;
}
