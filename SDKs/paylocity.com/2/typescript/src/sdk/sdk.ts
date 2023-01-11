import axios, { AxiosInstance } from "axios";
import * as utils from "../internal/utils";

import { AdditionalRates } from "./additionalrates";
import { ClientCredentials } from "./clientcredentials";
import { CompanyCodes } from "./companycodes";
import { CompanySpecificSchema } from "./companyspecificschema";
import { CustomFields } from "./customfields";
import { DirectDeposit } from "./directdeposit";
import { Earnings } from "./earnings";
import { EmergencyContacts } from "./emergencycontacts";
import { Employee } from "./employee";
import { EmployeeBenefitSetup } from "./employeebenefitsetup";
import { EmployeeStaging } from "./employeestaging";
import { LocalTaxes } from "./localtaxes";
import { NonPrimaryStateTax } from "./nonprimarystatetax";
import { PayStatements } from "./paystatements";
import { PrimaryStateTax } from "./primarystatetax";


export const ServerList = [
	"https://api.paylocity.com/api",
] as const;



export type SDKProps = {
  defaultClient?: AxiosInstance;

  serverUrl?: string;
}


export class SDK {
  public additionalRates: AdditionalRates;
  public clientCredentials: ClientCredentials;
  public companyCodes: CompanyCodes;
  public companySpecificSchema: CompanySpecificSchema;
  public customFields: CustomFields;
  public directDeposit: DirectDeposit;
  public earnings: Earnings;
  public emergencyContacts: EmergencyContacts;
  public employee: Employee;
  public employeeBenefitSetup: EmployeeBenefitSetup;
  public employeeStaging: EmployeeStaging;
  public localTaxes: LocalTaxes;
  public nonPrimaryStateTax: NonPrimaryStateTax;
  public payStatements: PayStatements;
  public primaryStateTax: PrimaryStateTax;

  public _defaultClient: AxiosInstance;
  public _securityClient: AxiosInstance;
  public _serverURL: string;
  private _language = "typescript";
  private _sdkVersion = "0.0.1";
  private _genVersion = "internal";

  constructor(props: SDKProps) {
    this._serverURL = props.serverUrl ?? ServerList[0];

    this._defaultClient = props.defaultClient ?? axios.create({ baseURL: this._serverURL });
    this._securityClient = this._defaultClient;
    
    this.additionalRates = new AdditionalRates(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.clientCredentials = new ClientCredentials(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.companyCodes = new CompanyCodes(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.companySpecificSchema = new CompanySpecificSchema(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.customFields = new CustomFields(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.directDeposit = new DirectDeposit(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.earnings = new Earnings(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.emergencyContacts = new EmergencyContacts(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.employee = new Employee(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.employeeBenefitSetup = new EmployeeBenefitSetup(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.employeeStaging = new EmployeeStaging(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.localTaxes = new LocalTaxes(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.nonPrimaryStateTax = new NonPrimaryStateTax(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.payStatements = new PayStatements(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.primaryStateTax = new PrimaryStateTax(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
  }
}