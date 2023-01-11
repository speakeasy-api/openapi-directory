import axios, { AxiosInstance } from "axios";
import * as utils from "../internal/utils";
import { Security } from "./models/shared";

import { AssetsCorrelationMatrix } from "./assetscorrelationmatrix";
import { AssetsCovarianceMatrix } from "./assetscovariancematrix";
import { AssetsReturns } from "./assetsreturns";
import { AssetsVariance } from "./assetsvariance";
import { AssetsVolatility } from "./assetsvolatility";
import { Factors } from "./factors";
import { PortfolioAnalysis } from "./portfolioanalysis";
import { PortfolioConstruction } from "./portfolioconstruction";
import { PortfolioOptimization } from "./portfoliooptimization";
import { PortfolioSimulation } from "./portfoliosimulation";


export const ServerList = [
	"https://api.portfoliooptimizer.io/v1",
	"https://eu-west-1.api.portfoliooptimizer.io/v1",
] as const;



export type SDKProps = {
  defaultClient?: AxiosInstance;

  security?: Security;

  serverUrl?: string;
}

/* SDK Documentation: https://docs.portfoliooptimizer.io/ - External documentation*/
export class SDK {
  public assetsCorrelationMatrix: AssetsCorrelationMatrix;
  public assetsCovarianceMatrix: AssetsCovarianceMatrix;
  public assetsReturns: AssetsReturns;
  public assetsVariance: AssetsVariance;
  public assetsVolatility: AssetsVolatility;
  public factors: Factors;
  public portfolioAnalysis: PortfolioAnalysis;
  public portfolioConstruction: PortfolioConstruction;
  public portfolioOptimization: PortfolioOptimization;
  public portfolioSimulation: PortfolioSimulation;

  public _defaultClient: AxiosInstance;
  public _securityClient: AxiosInstance;
  public _serverURL: string;
  private _language = "typescript";
  private _sdkVersion = "0.0.1";
  private _genVersion = "internal";

  constructor(props: SDKProps) {
    this._serverURL = props.serverUrl ?? ServerList[0];

    this._defaultClient = props.defaultClient ?? axios.create({ baseURL: this._serverURL });
    if (props.security) {
      let security: Security = props.security;
      if (!(props.security instanceof utils.SpeakeasyBase))
        security = new Security(props.security);
      this._securityClient = utils.createSecurityClient(
        this._defaultClient,
        security
      );
    } else {
      this._securityClient = this._defaultClient;
    }
    
    this.assetsCorrelationMatrix = new AssetsCorrelationMatrix(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.assetsCovarianceMatrix = new AssetsCovarianceMatrix(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.assetsReturns = new AssetsReturns(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.assetsVariance = new AssetsVariance(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.assetsVolatility = new AssetsVolatility(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.factors = new Factors(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.portfolioAnalysis = new PortfolioAnalysis(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.portfolioConstruction = new PortfolioConstruction(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.portfolioOptimization = new PortfolioOptimization(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.portfolioSimulation = new PortfolioSimulation(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
  }
}