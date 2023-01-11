package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class TypeaheadQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=q")
    public String q;
    public TypeaheadQueryParams withQ(String q) {
        this.q = q;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=safe_mode")
    public Long safeMode;
    public TypeaheadQueryParams withSafeMode(Long safeMode) {
        this.safeMode = safeMode;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=show_genres")
    public Long showGenres;
    public TypeaheadQueryParams withShowGenres(Long showGenres) {
        this.showGenres = showGenres;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=show_podcasts")
    public Long showPodcasts;
    public TypeaheadQueryParams withShowPodcasts(Long showPodcasts) {
        this.showPodcasts = showPodcasts;
        return this;
    }
}