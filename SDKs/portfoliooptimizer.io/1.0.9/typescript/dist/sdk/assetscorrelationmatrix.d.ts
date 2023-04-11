import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class AssetsCorrelationMatrix {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Correlation Matrix
     *
     * @remarks
     * Compute the Pearson asset correlation matrix from either:
     * * The asset returns
     * * The asset covariance matrix
     *
     * References
     * * [Wikipedia, Correlation and Dependence](https://en.wikipedia.org/wiki/Correlation_and_dependence#Correlation_matrices)
     *
     */
    postAssetsCorrelationMatrix(req: any, config?: AxiosRequestConfig): Promise<operations.PostAssetsCorrelationMatrixResponse>;
    /**
     * Correlation Matrix Bounds
     *
     * @remarks
     * Compute the lower bounds and the upper bounds of an asset correlation matrix associated to a given group of assets.
     *
     *  References
     *  * [Kawee Numpacharoen & Kornkanok Bunwong (2013) Boundaries of Correlation Adjustment with Applications to Financial Risk Management, Applied Mathematical Finance, 20:4, 403-414](http://dx.doi.org/10.1080/1350486X.2012.723517).
     *
     */
    postAssetsCorrelationMatrixBounds(req: operations.PostAssetsCorrelationMatrixBoundsRequestBody, config?: AxiosRequestConfig): Promise<operations.PostAssetsCorrelationMatrixBoundsResponse>;
    /**
     * Denoised Correlation Matrix
     *
     * @remarks
     * Compute a denoised asset correlation matrix, using one of the following methods:
     *  * The eigenvalues clipping method, described in the first reference, which is based on random matrix theory
     *
     *  References
     *  * [Laurent Laloux, Pierre Cizeau, Jean-Philippe Bouchaud, and Marc Potters, Noise Dressing of Financial Correlation Matrices, Phys. Rev. Lett. 83, 1467](https://journals.aps.org/prl/abstract/10.1103/PhysRevLett.83.1467)
     *
     */
    postAssetsCorrelationMatrixDenoised(req: operations.PostAssetsCorrelationMatrixDenoisedRequestBody, config?: AxiosRequestConfig): Promise<operations.PostAssetsCorrelationMatrixDenoisedResponse>;
    /**
     * Correlation Matrix Distance
     *
     * @remarks
     * Compute the distance between an asset correlation matrix and a reference correlation matrix, using one of the following distance metrics:
     * * Euclidean distance (default), which is the distance induced by [the Frobenius norm](https://en.wikipedia.org/wiki/Matrix_norm#Frobenius_norm)
     * * Correlation matrix distance, defined in the first reference, which corresponds to [the cosine distance](https://en.wikipedia.org/wiki/Cosine_similarity) between the two vectorized asset correlation matrices
     * * Bures distance, defined in the second reference
     *
     *  References
     *  * [M. Herdin, N. Czink, H. Ozcelik and E. Bonek, Correlation matrix distance, a meaningful measure for evaluation of non-stationary MIMO channels, 2005 IEEE 61st Vehicular Technology Conference, 2005, pp. 136-140 Vol. 1](https://ieeexplore.ieee.org/document/1543265)
     *  * [Rajendra Bhatia, Tanvi Jain, Yongdo Lim, On the Bures–Wasserstein distance between positive definite matrices, Expositiones Mathematicae, Volume 37, Issue 2, 2019](https://www.sciencedirect.com/science/article/pii/S0723086918300021)
     *
     */
    postAssetsCorrelationMatrixDistance(req: operations.PostAssetsCorrelationMatrixDistanceRequestBody, config?: AxiosRequestConfig): Promise<operations.PostAssetsCorrelationMatrixDistanceResponse>;
    /**
     * Correlation Matrix Effective Rank
     *
     * @remarks
     * Compute the effective rank of an asset correlation matrix.
     *
     * References
     * * [Olivier Roy and Martin Vetterli, The effective rank: A measure of effective dimensionality, 15th European Signal Processing Conference, 2007](https://ieeexplore.ieee.org/document/7098875)
     *
     */
    postAssetsCorrelationMatrixEffectiveRank(req: operations.PostAssetsCorrelationMatrixEffectiveRankRequestBody, config?: AxiosRequestConfig): Promise<operations.PostAssetsCorrelationMatrixEffectiveRankResponse>;
    /**
     * Correlation Matrix Informativeness
     *
     * @remarks
     * Compute the informativeness of an asset correlation matrix, using one of the following distance metrics:
     * * Euclidean distance (default), which is the distance induced by [the Frobenius norm](https://en.wikipedia.org/wiki/Matrix_norm#Frobenius_norm)
     * * Correlation matrix distance, defined in the second reference, which corresponds to [the cosine distance](https://en.wikipedia.org/wiki/Cosine_similarity) between the two vectorized asset correlation matrices
     * * Bures distance, defined in the third reference
     *
     *  References
     *  * [Austin J. Brockmeier and Tingting Mu and Sophia Ananiadou and John Y. Goulermas, Quantifying the Informativeness of Similarity Measurements, Journal of Machine Learning Research, 2017](http://jmlr.org/papers/v18/16-296.html)
     *  * [M. Herdin, N. Czink, H. Ozcelik and E. Bonek, Correlation matrix distance, a meaningful measure for evaluation of non-stationary MIMO channels, 2005 IEEE 61st Vehicular Technology Conference, 2005, pp. 136-140 Vol. 1](https://ieeexplore.ieee.org/document/1543265)
     *  * [Rajendra Bhatia, Tanvi Jain, Yongdo Lim, On the Bures–Wasserstein distance between positive definite matrices, Expositiones Mathematicae, Volume 37, Issue 2, 2019](https://www.sciencedirect.com/science/article/pii/S0723086918300021)
     *
     */
    postAssetsCorrelationMatrixInformativeness(req: operations.PostAssetsCorrelationMatrixInformativenessRequestBody, config?: AxiosRequestConfig): Promise<operations.PostAssetsCorrelationMatrixInformativenessResponse>;
    /**
     * Nearest Correlation Matrix
     *
     * @remarks
     * Compute the _closest_ - in terms of [the Frobenius norm](https://en.wikipedia.org/wiki/Matrix_norm#Frobenius_norm) - asset correlation matrix to an approximate asset correlation matrix, optionally keeping a selected number of correlations fixed.
     *
     * References
     * * [Nicholas J. Higham, Computing the Nearest Correlation Matrix—A Problem from Finance, IMA J. Numer. Anal. 22, 329–343, 2002.](http://www.maths.manchester.ac.uk/~higham/narep/narep369.pdf)
     *
     */
    postAssetsCorrelationMatrixNearest(req: operations.PostAssetsCorrelationMatrixNearestRequestBody, config?: AxiosRequestConfig): Promise<operations.PostAssetsCorrelationMatrixNearestResponse>;
    /**
     * Random Correlation Matrix
     *
     * @remarks
     * Generate an asset correlation matrix uniformly at random over the space of positive definite correlation matrices.
     *
     * References
     * * [Joe, H., Generating random correlation matrices based on partial correlations. Journal of Multivariate Analysis, 2006, 97, 2177-2189](https://www.sciencedirect.com/science/article/pii/S0047259X05000886)
     *
     */
    postAssetsCorrelationMatrixRandom(req: operations.PostAssetsCorrelationMatrixRandomRequestBody, config?: AxiosRequestConfig): Promise<operations.PostAssetsCorrelationMatrixRandomResponse>;
    /**
     * Correlation Matrix Shrinkage
     *
     * @remarks
     * Compute an asset correlation matrix as a convex linear combination of an asset correlation matrix and a target correlation matrix, the target correlation matrix being either:
     *  * An equicorrelation matrix made of 1
     *  * An equicorrelation matrix made of 0
     *  * An equicorrelation matrix made of -1/(n-1), with n the number of assets
     *  * A provided correlation matrix
     *
     *  References
     *  * [Steiner, Andreas, Manipulating Valid Correlation Matrices](https://papers.ssrn.com/sol3/papers.cfm?abstract_id=1878165)
     *
     */
    postAssetsCorrelationMatrixShrinkage(req: any, config?: AxiosRequestConfig): Promise<operations.PostAssetsCorrelationMatrixShrinkageResponse>;
    /**
     * Theory-Implied Correlation Matrix
     *
     * @remarks
     * Compute the theory-implied asset correlation matrix associated with:
     * * A hierarchical classification of a universe of assets
     * * An asset correlation matrix
     *
     * References
     * * [Lopez de Prado, Marcos Estimation of Theory-Implied Correlation Matrices (November 9, 2019)](https://papers.ssrn.com/sol3/papers.cfm?abstract_id=3484152)
     *
     */
    postAssetsCorrelationMatrixTheoryImplied(req: operations.PostAssetsCorrelationMatrixTheoryImpliedRequestBody, config?: AxiosRequestConfig): Promise<operations.PostAssetsCorrelationMatrixTheoryImpliedResponse>;
    /**
     * Correlation Matrix Validation
     *
     * @remarks
     * Validate whether a matrix is an asset correlation matrix.
     *
     * References
     * * [Wikipedia, Correlation and Dependence](https://en.wikipedia.org/wiki/Correlation_and_dependence#Correlation_matrices)
     *
     */
    postAssetsCorrelationMatrixValidation(req: operations.PostAssetsCorrelationMatrixValidationRequestBody, config?: AxiosRequestConfig): Promise<operations.PostAssetsCorrelationMatrixValidationResponse>;
}
