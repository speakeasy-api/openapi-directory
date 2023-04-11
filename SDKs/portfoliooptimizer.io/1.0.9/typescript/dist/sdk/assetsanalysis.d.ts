import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class AssetsAnalysis {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Absorption Ratio
     *
     * @remarks
     * Compute the absorption ratio associated to a universe of assets.
     *
     * References
     * * [Mark Kritzman, Yuanzhen Li, Sebastien Page and Roberto Rigobon, Principal Components as a Measure of Systemic Risk, The Journal of Portfolio Management Summer 2011, 37 (4) 112-126](https://jpm.pm-research.com/content/37/4/112)
     *
     */
    postAssetsAnalysisAbsorptionRatio(req: operations.PostAssetsAnalysisAbsorptionRatioRequestBody, config?: AxiosRequestConfig): Promise<operations.PostAssetsAnalysisAbsorptionRatioResponse>;
    /**
     * Turbulence Index
     *
     * @remarks
     * Compute the turbulence index associated to a universe of assets.
     *
     * References
     * * [M. Kritzman, Y. Li, Skulls, Financial Turbulence, and Risk Management,Financial Analysts Journal, Volume 66, Number 5, Pages 30-41, Year 2010](https://www.tandfonline.com/doi/abs/10.2469/faj.v66.n5.3)
     * * [Kinlaw, W., Turkington, D. Correlation surprise. J Asset Manag 14, 385–399 (2013)](https://link.springer.com/article/10.1057/jam.2013.27)
     *
     */
    postAssetsAnalysisTurbulenceIndex(req: operations.PostAssetsAnalysisTurbulenceIndexRequestBody, config?: AxiosRequestConfig): Promise<operations.PostAssetsAnalysisTurbulenceIndexResponse>;
}
