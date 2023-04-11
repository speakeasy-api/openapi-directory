import { SpeakeasyBase } from "../../../internal/utils";
import { CompanySummary } from "./companysummary";
import { Score } from "./score";
import { Status } from "./status";
import { Summary } from "./summary";
import { VehicleSummary } from "./vehiclesummary";
import { WrongInput } from "./wronginput";
/**
 * ID Document country
 */
export declare enum CheckCountryEnum {
    All = "ALL",
    Br = "BR",
    Cl = "CL",
    Co = "CO",
    Cr = "CR",
    Ec = "EC",
    Mx = "MX",
    Pe = "PE",
    Ar = "AR"
}
/**
 * Person origin country
 */
export declare enum CheckNativeCountryEnum {
    Ad = "ad",
    Ae = "ae",
    Af = "af",
    Ag = "ag",
    Ai = "ai",
    Al = "al",
    Am = "am",
    An = "an",
    Ao = "ao",
    Aq = "aq",
    Ar = "ar",
    As = "as",
    At = "at",
    Au = "au",
    Aw = "aw",
    Ax = "ax",
    Az = "az",
    Ba = "ba",
    Bb = "bb",
    Bd = "bd",
    Be = "be",
    Bf = "bf",
    Bg = "bg",
    Bh = "bh",
    Bi = "bi",
    Bj = "bj",
    Bm = "bm",
    Bn = "bn",
    Bo = "bo",
    Br = "br",
    Bs = "bs",
    Bt = "bt",
    Bv = "bv",
    Bw = "bw",
    By = "by",
    Bz = "bz",
    Ca = "ca",
    Cc = "cc",
    Cd = "cd",
    Cf = "cf",
    Cg = "cg",
    Ch = "ch",
    Ci = "ci",
    Ck = "ck",
    Cl = "cl",
    Cm = "cm",
    Cn = "cn",
    Co = "co",
    Cr = "cr",
    Cu = "cu",
    Cv = "cv",
    Cx = "cx",
    Cy = "cy",
    Cz = "cz",
    De = "de",
    Dj = "dj",
    Dk = "dk",
    Dm = "dm",
    Do = "do",
    Dz = "dz",
    Ea = "ea",
    Ec = "ec",
    Ee = "ee",
    Eg = "eg",
    Eh = "eh",
    Er = "er",
    Es = "es",
    Et = "et",
    Fi = "fi",
    Fj = "fj",
    Fk = "fk",
    Fm = "fm",
    Fo = "fo",
    Fr = "fr",
    Ga = "ga",
    Gb = "gb",
    Gd = "gd",
    Ge = "ge",
    Gf = "gf",
    Gg = "gg",
    Gh = "gh",
    Gi = "gi",
    Gl = "gl",
    Gm = "gm",
    Gn = "gn",
    Gp = "gp",
    Gq = "gq",
    Gr = "gr",
    Gs = "gs",
    Gt = "gt",
    Gu = "gu",
    Gw = "gw",
    Gy = "gy",
    Hk = "hk",
    Hm = "hm",
    Hn = "hn",
    Hr = "hr",
    Ht = "ht",
    Hu = "hu",
    Id = "id",
    Ie = "ie",
    Il = "il",
    Im = "im",
    In = "in",
    Io = "io",
    Iq = "iq",
    Ir = "ir",
    Is = "is",
    It = "it",
    Je = "je",
    Jm = "jm",
    Jo = "jo",
    Jp = "jp",
    Ke = "ke",
    Kg = "kg",
    Kh = "kh",
    Ki = "ki",
    Km = "km",
    Kn = "kn",
    Kp = "kp",
    Kr = "kr",
    Kw = "kw",
    Ky = "ky",
    Kz = "kz",
    La = "la",
    Lb = "lb",
    Lc = "lc",
    Li = "li",
    Lk = "lk",
    Lr = "lr",
    Ls = "ls",
    Lt = "lt",
    Lu = "lu",
    Lv = "lv",
    Ly = "ly",
    Ma = "ma",
    Mc = "mc",
    Md = "md",
    Me = "me",
    Mg = "mg",
    Mh = "mh",
    Mk = "mk",
    Ml = "ml",
    Mm = "mm",
    Mn = "mn",
    Mo = "mo",
    Mp = "mp",
    Mq = "mq",
    Mr = "mr",
    Ms = "ms",
    Mt = "mt",
    Mu = "mu",
    Mv = "mv",
    Mw = "mw",
    Mx = "mx",
    My = "my",
    Mz = "mz",
    Na = "na",
    Nc = "nc",
    Ne = "ne",
    Nf = "nf",
    Ng = "ng",
    Ni = "ni",
    Nl = "nl",
    No = "no",
    Np = "np",
    Nr = "nr",
    Nu = "nu",
    Nz = "nz",
    Om = "om",
    Pa = "pa",
    Pe = "pe",
    Pf = "pf",
    Pg = "pg",
    Ph = "ph",
    Pk = "pk",
    Pl = "pl",
    Pm = "pm",
    Pn = "pn",
    Pr = "pr",
    Ps = "ps",
    Pt = "pt",
    Pw = "pw",
    Py = "py",
    Qa = "qa",
    Re = "re",
    Ro = "ro",
    Rs = "rs",
    Ru = "ru",
    Rw = "rw",
    Sa = "sa",
    Sb = "sb",
    Sc = "sc",
    Sd = "sd",
    Se = "se",
    Sg = "sg",
    Sh = "sh",
    Si = "si",
    Sj = "sj",
    Sk = "sk",
    Sl = "sl",
    Sm = "sm",
    Sn = "sn",
    So = "so",
    Sr = "sr",
    St = "st",
    Sv = "sv",
    Sy = "sy",
    Sz = "sz",
    Tc = "tc",
    Td = "td",
    Tf = "tf",
    Tg = "tg",
    Th = "th",
    Tj = "tj",
    Tk = "tk",
    Tl = "tl",
    Tm = "tm",
    Tn = "tn",
    To = "to",
    Tr = "tr",
    Tt = "tt",
    Tv = "tv",
    Tw = "tw",
    Tz = "tz",
    Ua = "ua",
    Ug = "ug",
    Um = "um",
    Us = "us",
    Uy = "uy",
    Uz = "uz",
    Va = "va",
    Vc = "vc",
    Ve = "ve",
    Vg = "vg",
    Vi = "vi",
    Vn = "vn",
    Vu = "vu",
    Wf = "wf",
    Ws = "ws",
    Ye = "ye",
    Yt = "yt",
    Za = "za",
    Zm = "zm",
    Zw = "zw"
}
/**
 * Region where the background is to be checked. By default, background checks in Brazil are performed in region where the person is from. Applies for some Brazil collectors only. Allowed values are: DF: Distrito Federal, AC: Acre, AL: Alagoas, AP: Amapá, AM: Amazonas, BA: Bahía, CE: Ceará, ES: Espírito Santo, GO: Goiás, MA: Maranhão, MT: Mato Grosso, MS: Mato Grosso do Sul, MG: Minas Gerais, PA: Pará, PB: Paraíba, PR: Paraná, PE: Pernambuco, PI: Piauí, RJ: Río de Janeiro, RN: Río Grande do Norte, RS: Río Grande do Sul, RO: Rondônia, RR: Roraima, SC: Santa Catarina, SP: São Paulo, SE: Sergipe, TO : Tocantins.
 *
 * @remarks
 *
 */
export declare enum CheckRegionEnum {
    Df = "DF",
    Ac = "AC",
    Al = "AL",
    Ap = "AP",
    Am = "AM",
    Ba = "BA",
    Ce = "CE",
    Es = "ES",
    Go = "GO",
    Ma = "MA",
    Mt = "MT",
    Ms = "MS",
    Mg = "MG",
    Pa = "PA",
    Pb = "PB",
    Pr = "PR",
    Pe = "PE",
    Pi = "PI",
    Rj = "RJ",
    Rn = "RN",
    Rs = "RS",
    Ro = "RO",
    Rr = "RR",
    Sc = "SC",
    Sp = "SP",
    Se = "SE",
    To = "TO"
}
/**
 * Result status of the background check. **Not_started** means the background check is still in queue, since there is a limit of background checks that can be processed simultaneously, **completed** means the check finished successfully, **error** means the check failed, **in_progress** means the check is currently being processed, **delayed** means the check is waiting for an additional requirement to be met, this can last up to 3 days. **Completed** and **error** are the two only final statuses
 */
export declare enum CheckStatusEnum {
    NotStarted = "not_started",
    InProgress = "in_progress",
    Completed = "completed",
    Error = "error",
    Delayed = "delayed"
}
/**
 * Background check type
 */
export declare enum CheckTypeEnum {
    Company = "company",
    Person = "person",
    Vehicle = "vehicle"
}
/**
 * Represents a background check
 */
export declare class Check extends SpeakeasyBase {
    /**
     * Person birth certificate
     */
    birthCertificate?: string;
    /**
     * Background check ID
     */
    checkId: string;
    /**
     * Represents the summary of a company background check
     */
    companySummary?: CompanySummary;
    /**
     * ID Document country
     */
    country: CheckCountryEnum;
    /**
     * Background check creation date
     */
    creationDate: Date;
    /**
     * Person birthdate. Shown only if provided during check creation. YYYY-MM-DD format
     */
    dateOfBirth?: Date;
    /**
     * Person diplomatic id
     */
    diplomaticId?: string;
    /**
     * Person driver's license
     */
    driverLicense?: string;
    /**
     * Person or entity first name. Shown only if provided during check creation
     */
    firstName?: string;
    /**
     * Person foreign identification
     */
    foreignId?: string;
    /**
     * [Experimental] Analyzes the probability that the results by name are attributed to a homonym. Number between 0 and 1 where 1 is the the greatest probability
     */
    homonymProbability?: number;
    /**
     * Background check score including results by name only. This might contain homonym information
     */
    homonymScore?: number;
    /**
     * Background check scores by name for each profile group. [Deprecated for API key V1]
     */
    homonymScores?: Score[];
    /**
     * Background check score regarding results by ID number only. It is a number between 0 and 1 where 1 is the best score. This result is a weighted average of the id_scores listed under scores.
     */
    idScore: number;
    /**
     * Issue date of the person ID
     */
    issueDate?: Date;
    /**
     * Person or entity last name. Shown only if provided during check creation
     */
    lastName?: string;
    /**
     * Vehicle license plate
     */
    licensePlate?: string;
    /**
     * Person national identification
     */
    nationalId?: string;
    /**
     * Person origin country
     */
    nativeCountry?: CheckNativeCountryEnum;
    /**
     * Vehicle owner identification
     */
    ownerDocumentId?: string;
    /**
     * Vehicle owner document type
     */
    ownerDocumentType?: string;
    /**
     * Person passport
     */
    passport?: string;
    /**
     * Vehicle license payment date
     */
    paymentDate?: string;
    /**
     * Colombian PEP idenfitication for Venezuelans
     */
    pep?: string;
    /**
     * Person phone number. Required by law in order to notify the person their background is being checked
     */
    phoneNumber?: string;
    /**
     * Person professional card number
     */
    professionalCard?: string;
    /**
     * Temporary residence permit of the person
     */
    ptp?: string;
    /**
     * Region where the background is to be checked. By default, background checks in Brazil are performed in region where the person is from. Applies for some Brazil collectors only. Allowed values are: DF: Distrito Federal, AC: Acre, AL: Alagoas, AP: Amapá, AM: Amazonas, BA: Bahía, CE: Ceará, ES: Espírito Santo, GO: Goiás, MA: Maranhão, MT: Mato Grosso, MS: Mato Grosso do Sul, MG: Minas Gerais, PA: Pará, PB: Paraíba, PR: Paraná, PE: Pernambuco, PI: Piauí, RJ: Río de Janeiro, RN: Río Grande do Norte, RS: Río Grande do Sul, RO: Rondônia, RR: Roraima, SC: Santa Catarina, SP: São Paulo, SE: Sergipe, TO : Tocantins.
     *
     * @remarks
     *
     */
    region?: CheckRegionEnum;
    /**
     * Report ID the background check is associated with
     */
    reportId?: string;
    /**
     * Background check score. Number between 0 and 1 where 1 is the best score
     */
    score: number;
    /**
     * Background check score of each profile group and dataset
     */
    scores?: Score[];
    /**
     * Result status of the background check. **Not_started** means the background check is still in queue, since there is a limit of background checks that can be processed simultaneously, **completed** means the check finished successfully, **error** means the check failed, **in_progress** means the check is currently being processed, **delayed** means the check is waiting for an additional requirement to be met, this can last up to 3 days. **Completed** and **error** are the two only final statuses
     */
    status: CheckStatusEnum;
    /**
     * Database status list
     */
    statuses: Status[];
    /**
     * Represents a background check summary
     */
    summary: Summary;
    /**
     * Person or company tax id
     */
    taxId?: string;
    /**
     * Background check type
     */
    type: CheckTypeEnum;
    /**
     * Background check update date
     */
    updateDate?: Date;
    /**
     * Vehicle identification
     */
    vehicleId?: string;
    /**
     * Represents the summary of a vehicle background check
     */
    vehicleSummary?: VehicleSummary;
    /**
     * List of parameters entered during background check creation that do not match the information obtained
     */
    wrongInputs?: WrongInput[];
}
