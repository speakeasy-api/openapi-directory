package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ContentRating
 * Ratings schemes. The country-specific ratings are mostly for movies and shows. LINT.IfChange
**/
public class ContentRating {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("acbRating")
    public ContentRatingAcbRatingEnum acbRating;
    public ContentRating withAcbRating(ContentRatingAcbRatingEnum acbRating) {
        this.acbRating = acbRating;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("agcomRating")
    public ContentRatingAgcomRatingEnum agcomRating;
    public ContentRating withAgcomRating(ContentRatingAgcomRatingEnum agcomRating) {
        this.agcomRating = agcomRating;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("anatelRating")
    public ContentRatingAnatelRatingEnum anatelRating;
    public ContentRating withAnatelRating(ContentRatingAnatelRatingEnum anatelRating) {
        this.anatelRating = anatelRating;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("bbfcRating")
    public ContentRatingBbfcRatingEnum bbfcRating;
    public ContentRating withBbfcRating(ContentRatingBbfcRatingEnum bbfcRating) {
        this.bbfcRating = bbfcRating;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("bfvcRating")
    public ContentRatingBfvcRatingEnum bfvcRating;
    public ContentRating withBfvcRating(ContentRatingBfvcRatingEnum bfvcRating) {
        this.bfvcRating = bfvcRating;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("bmukkRating")
    public ContentRatingBmukkRatingEnum bmukkRating;
    public ContentRating withBmukkRating(ContentRatingBmukkRatingEnum bmukkRating) {
        this.bmukkRating = bmukkRating;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("catvRating")
    public ContentRatingCatvRatingEnum catvRating;
    public ContentRating withCatvRating(ContentRatingCatvRatingEnum catvRating) {
        this.catvRating = catvRating;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("catvfrRating")
    public ContentRatingCatvfrRatingEnum catvfrRating;
    public ContentRating withCatvfrRating(ContentRatingCatvfrRatingEnum catvfrRating) {
        this.catvfrRating = catvfrRating;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("cbfcRating")
    public ContentRatingCbfcRatingEnum cbfcRating;
    public ContentRating withCbfcRating(ContentRatingCbfcRatingEnum cbfcRating) {
        this.cbfcRating = cbfcRating;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("cccRating")
    public ContentRatingCccRatingEnum cccRating;
    public ContentRating withCccRating(ContentRatingCccRatingEnum cccRating) {
        this.cccRating = cccRating;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("cceRating")
    public ContentRatingCceRatingEnum cceRating;
    public ContentRating withCceRating(ContentRatingCceRatingEnum cceRating) {
        this.cceRating = cceRating;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("chfilmRating")
    public ContentRatingChfilmRatingEnum chfilmRating;
    public ContentRating withChfilmRating(ContentRatingChfilmRatingEnum chfilmRating) {
        this.chfilmRating = chfilmRating;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("chvrsRating")
    public ContentRatingChvrsRatingEnum chvrsRating;
    public ContentRating withChvrsRating(ContentRatingChvrsRatingEnum chvrsRating) {
        this.chvrsRating = chvrsRating;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("cicfRating")
    public ContentRatingCicfRatingEnum cicfRating;
    public ContentRating withCicfRating(ContentRatingCicfRatingEnum cicfRating) {
        this.cicfRating = cicfRating;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("cnaRating")
    public ContentRatingCnaRatingEnum cnaRating;
    public ContentRating withCnaRating(ContentRatingCnaRatingEnum cnaRating) {
        this.cnaRating = cnaRating;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("cncRating")
    public ContentRatingCncRatingEnum cncRating;
    public ContentRating withCncRating(ContentRatingCncRatingEnum cncRating) {
        this.cncRating = cncRating;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("csaRating")
    public ContentRatingCsaRatingEnum csaRating;
    public ContentRating withCsaRating(ContentRatingCsaRatingEnum csaRating) {
        this.csaRating = csaRating;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("cscfRating")
    public ContentRatingCscfRatingEnum cscfRating;
    public ContentRating withCscfRating(ContentRatingCscfRatingEnum cscfRating) {
        this.cscfRating = cscfRating;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("czfilmRating")
    public ContentRatingCzfilmRatingEnum czfilmRating;
    public ContentRating withCzfilmRating(ContentRatingCzfilmRatingEnum czfilmRating) {
        this.czfilmRating = czfilmRating;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("djctqRating")
    public ContentRatingDjctqRatingEnum djctqRating;
    public ContentRating withDjctqRating(ContentRatingDjctqRatingEnum djctqRating) {
        this.djctqRating = djctqRating;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("djctqRatingReasons")
    public ContentRatingDjctqRatingReasonsEnum[] djctqRatingReasons;
    public ContentRating withDjctqRatingReasons(ContentRatingDjctqRatingReasonsEnum[] djctqRatingReasons) {
        this.djctqRatingReasons = djctqRatingReasons;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ecbmctRating")
    public ContentRatingEcbmctRatingEnum ecbmctRating;
    public ContentRating withEcbmctRating(ContentRatingEcbmctRatingEnum ecbmctRating) {
        this.ecbmctRating = ecbmctRating;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("eefilmRating")
    public ContentRatingEefilmRatingEnum eefilmRating;
    public ContentRating withEefilmRating(ContentRatingEefilmRatingEnum eefilmRating) {
        this.eefilmRating = eefilmRating;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("egfilmRating")
    public ContentRatingEgfilmRatingEnum egfilmRating;
    public ContentRating withEgfilmRating(ContentRatingEgfilmRatingEnum egfilmRating) {
        this.egfilmRating = egfilmRating;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("eirinRating")
    public ContentRatingEirinRatingEnum eirinRating;
    public ContentRating withEirinRating(ContentRatingEirinRatingEnum eirinRating) {
        this.eirinRating = eirinRating;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("fcbmRating")
    public ContentRatingFcbmRatingEnum fcbmRating;
    public ContentRating withFcbmRating(ContentRatingFcbmRatingEnum fcbmRating) {
        this.fcbmRating = fcbmRating;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("fcoRating")
    public ContentRatingFcoRatingEnum fcoRating;
    public ContentRating withFcoRating(ContentRatingFcoRatingEnum fcoRating) {
        this.fcoRating = fcoRating;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("fmocRating")
    public ContentRatingFmocRatingEnum fmocRating;
    public ContentRating withFmocRating(ContentRatingFmocRatingEnum fmocRating) {
        this.fmocRating = fmocRating;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("fpbRating")
    public ContentRatingFpbRatingEnum fpbRating;
    public ContentRating withFpbRating(ContentRatingFpbRatingEnum fpbRating) {
        this.fpbRating = fpbRating;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("fpbRatingReasons")
    public ContentRatingFpbRatingReasonsEnum[] fpbRatingReasons;
    public ContentRating withFpbRatingReasons(ContentRatingFpbRatingReasonsEnum[] fpbRatingReasons) {
        this.fpbRatingReasons = fpbRatingReasons;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("fskRating")
    public ContentRatingFskRatingEnum fskRating;
    public ContentRating withFskRating(ContentRatingFskRatingEnum fskRating) {
        this.fskRating = fskRating;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("grfilmRating")
    public ContentRatingGrfilmRatingEnum grfilmRating;
    public ContentRating withGrfilmRating(ContentRatingGrfilmRatingEnum grfilmRating) {
        this.grfilmRating = grfilmRating;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("icaaRating")
    public ContentRatingIcaaRatingEnum icaaRating;
    public ContentRating withIcaaRating(ContentRatingIcaaRatingEnum icaaRating) {
        this.icaaRating = icaaRating;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ifcoRating")
    public ContentRatingIfcoRatingEnum ifcoRating;
    public ContentRating withIfcoRating(ContentRatingIfcoRatingEnum ifcoRating) {
        this.ifcoRating = ifcoRating;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ilfilmRating")
    public ContentRatingIlfilmRatingEnum ilfilmRating;
    public ContentRating withIlfilmRating(ContentRatingIlfilmRatingEnum ilfilmRating) {
        this.ilfilmRating = ilfilmRating;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("incaaRating")
    public ContentRatingIncaaRatingEnum incaaRating;
    public ContentRating withIncaaRating(ContentRatingIncaaRatingEnum incaaRating) {
        this.incaaRating = incaaRating;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("kfcbRating")
    public ContentRatingKfcbRatingEnum kfcbRating;
    public ContentRating withKfcbRating(ContentRatingKfcbRatingEnum kfcbRating) {
        this.kfcbRating = kfcbRating;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("kijkwijzerRating")
    public ContentRatingKijkwijzerRatingEnum kijkwijzerRating;
    public ContentRating withKijkwijzerRating(ContentRatingKijkwijzerRatingEnum kijkwijzerRating) {
        this.kijkwijzerRating = kijkwijzerRating;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("kmrbRating")
    public ContentRatingKmrbRatingEnum kmrbRating;
    public ContentRating withKmrbRating(ContentRatingKmrbRatingEnum kmrbRating) {
        this.kmrbRating = kmrbRating;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("lsfRating")
    public ContentRatingLsfRatingEnum lsfRating;
    public ContentRating withLsfRating(ContentRatingLsfRatingEnum lsfRating) {
        this.lsfRating = lsfRating;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("mccaaRating")
    public ContentRatingMccaaRatingEnum mccaaRating;
    public ContentRating withMccaaRating(ContentRatingMccaaRatingEnum mccaaRating) {
        this.mccaaRating = mccaaRating;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("mccypRating")
    public ContentRatingMccypRatingEnum mccypRating;
    public ContentRating withMccypRating(ContentRatingMccypRatingEnum mccypRating) {
        this.mccypRating = mccypRating;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("mcstRating")
    public ContentRatingMcstRatingEnum mcstRating;
    public ContentRating withMcstRating(ContentRatingMcstRatingEnum mcstRating) {
        this.mcstRating = mcstRating;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("mdaRating")
    public ContentRatingMdaRatingEnum mdaRating;
    public ContentRating withMdaRating(ContentRatingMdaRatingEnum mdaRating) {
        this.mdaRating = mdaRating;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("medietilsynetRating")
    public ContentRatingMedietilsynetRatingEnum medietilsynetRating;
    public ContentRating withMedietilsynetRating(ContentRatingMedietilsynetRatingEnum medietilsynetRating) {
        this.medietilsynetRating = medietilsynetRating;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("mekuRating")
    public ContentRatingMekuRatingEnum mekuRating;
    public ContentRating withMekuRating(ContentRatingMekuRatingEnum mekuRating) {
        this.mekuRating = mekuRating;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("menaMpaaRating")
    public ContentRatingMenaMpaaRatingEnum menaMpaaRating;
    public ContentRating withMenaMpaaRating(ContentRatingMenaMpaaRatingEnum menaMpaaRating) {
        this.menaMpaaRating = menaMpaaRating;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("mibacRating")
    public ContentRatingMibacRatingEnum mibacRating;
    public ContentRating withMibacRating(ContentRatingMibacRatingEnum mibacRating) {
        this.mibacRating = mibacRating;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("mocRating")
    public ContentRatingMocRatingEnum mocRating;
    public ContentRating withMocRating(ContentRatingMocRatingEnum mocRating) {
        this.mocRating = mocRating;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("moctwRating")
    public ContentRatingMoctwRatingEnum moctwRating;
    public ContentRating withMoctwRating(ContentRatingMoctwRatingEnum moctwRating) {
        this.moctwRating = moctwRating;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("mpaaRating")
    public ContentRatingMpaaRatingEnum mpaaRating;
    public ContentRating withMpaaRating(ContentRatingMpaaRatingEnum mpaaRating) {
        this.mpaaRating = mpaaRating;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("mpaatRating")
    public ContentRatingMpaatRatingEnum mpaatRating;
    public ContentRating withMpaatRating(ContentRatingMpaatRatingEnum mpaatRating) {
        this.mpaatRating = mpaatRating;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("mtrcbRating")
    public ContentRatingMtrcbRatingEnum mtrcbRating;
    public ContentRating withMtrcbRating(ContentRatingMtrcbRatingEnum mtrcbRating) {
        this.mtrcbRating = mtrcbRating;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nbcRating")
    public ContentRatingNbcRatingEnum nbcRating;
    public ContentRating withNbcRating(ContentRatingNbcRatingEnum nbcRating) {
        this.nbcRating = nbcRating;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nbcplRating")
    public ContentRatingNbcplRatingEnum nbcplRating;
    public ContentRating withNbcplRating(ContentRatingNbcplRatingEnum nbcplRating) {
        this.nbcplRating = nbcplRating;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nfrcRating")
    public ContentRatingNfrcRatingEnum nfrcRating;
    public ContentRating withNfrcRating(ContentRatingNfrcRatingEnum nfrcRating) {
        this.nfrcRating = nfrcRating;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nfvcbRating")
    public ContentRatingNfvcbRatingEnum nfvcbRating;
    public ContentRating withNfvcbRating(ContentRatingNfvcbRatingEnum nfvcbRating) {
        this.nfvcbRating = nfvcbRating;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nkclvRating")
    public ContentRatingNkclvRatingEnum nkclvRating;
    public ContentRating withNkclvRating(ContentRatingNkclvRatingEnum nkclvRating) {
        this.nkclvRating = nkclvRating;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nmcRating")
    public ContentRatingNmcRatingEnum nmcRating;
    public ContentRating withNmcRating(ContentRatingNmcRatingEnum nmcRating) {
        this.nmcRating = nmcRating;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("oflcRating")
    public ContentRatingOflcRatingEnum oflcRating;
    public ContentRating withOflcRating(ContentRatingOflcRatingEnum oflcRating) {
        this.oflcRating = oflcRating;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("pefilmRating")
    public ContentRatingPefilmRatingEnum pefilmRating;
    public ContentRating withPefilmRating(ContentRatingPefilmRatingEnum pefilmRating) {
        this.pefilmRating = pefilmRating;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("rcnofRating")
    public ContentRatingRcnofRatingEnum rcnofRating;
    public ContentRating withRcnofRating(ContentRatingRcnofRatingEnum rcnofRating) {
        this.rcnofRating = rcnofRating;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("resorteviolenciaRating")
    public ContentRatingResorteviolenciaRatingEnum resorteviolenciaRating;
    public ContentRating withResorteviolenciaRating(ContentRatingResorteviolenciaRatingEnum resorteviolenciaRating) {
        this.resorteviolenciaRating = resorteviolenciaRating;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("rtcRating")
    public ContentRatingRtcRatingEnum rtcRating;
    public ContentRating withRtcRating(ContentRatingRtcRatingEnum rtcRating) {
        this.rtcRating = rtcRating;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("rteRating")
    public ContentRatingRteRatingEnum rteRating;
    public ContentRating withRteRating(ContentRatingRteRatingEnum rteRating) {
        this.rteRating = rteRating;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("russiaRating")
    public ContentRatingRussiaRatingEnum russiaRating;
    public ContentRating withRussiaRating(ContentRatingRussiaRatingEnum russiaRating) {
        this.russiaRating = russiaRating;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("skfilmRating")
    public ContentRatingSkfilmRatingEnum skfilmRating;
    public ContentRating withSkfilmRating(ContentRatingSkfilmRatingEnum skfilmRating) {
        this.skfilmRating = skfilmRating;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("smaisRating")
    public ContentRatingSmaisRatingEnum smaisRating;
    public ContentRating withSmaisRating(ContentRatingSmaisRatingEnum smaisRating) {
        this.smaisRating = smaisRating;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("smsaRating")
    public ContentRatingSmsaRatingEnum smsaRating;
    public ContentRating withSmsaRating(ContentRatingSmsaRatingEnum smsaRating) {
        this.smsaRating = smsaRating;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tvpgRating")
    public ContentRatingTvpgRatingEnum tvpgRating;
    public ContentRating withTvpgRating(ContentRatingTvpgRatingEnum tvpgRating) {
        this.tvpgRating = tvpgRating;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ytRating")
    public ContentRatingYtRatingEnum ytRating;
    public ContentRating withYtRating(ContentRatingYtRatingEnum ytRating) {
        this.ytRating = ytRating;
        return this;
    }
}