package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

public class Spin {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("_links")
    public SpinLinks links;
    public Spin withLinks(SpinLinks links) {
        this.links = links;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("artist")
    public String artist;
    public Spin withArtist(String artist) {
        this.artist = artist;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("artist-custom")
    public String artistCustom;
    public Spin withArtistCustom(String artistCustom) {
        this.artistCustom = artistCustom;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("catalog-number")
    public String catalogNumber;
    public Spin withCatalogNumber(String catalogNumber) {
        this.catalogNumber = catalogNumber;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("classical")
    public Boolean classical;
    public Spin withClassical(Boolean classical) {
        this.classical = classical;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("composer")
    public String composer;
    public Spin withComposer(String composer) {
        this.composer = composer;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("conductor")
    public String conductor;
    public Spin withConductor(String conductor) {
        this.conductor = conductor;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("duration")
    public Long duration;
    public Spin withDuration(Long duration) {
        this.duration = duration;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("end")
    public OffsetDateTime end;
    public Spin withEnd(OffsetDateTime end) {
        this.end = end;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ensemble")
    public String ensemble;
    public Spin withEnsemble(String ensemble) {
        this.ensemble = ensemble;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("genre")
    public String genre;
    public Spin withGenre(String genre) {
        this.genre = genre;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public Long id;
    public Spin withId(Long id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("image")
    public String image;
    public Spin withImage(String image) {
        this.image = image;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("isrc")
    public String isrc;
    public Spin withIsrc(String isrc) {
        this.isrc = isrc;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("iswc")
    public String iswc;
    public Spin withIswc(String iswc) {
        this.iswc = iswc;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("label")
    public String label;
    public Spin withLabel(String label) {
        this.label = label;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("label-custom")
    public String labelCustom;
    public Spin withLabelCustom(String labelCustom) {
        this.labelCustom = labelCustom;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("local")
    public Boolean local;
    public Spin withLocal(Boolean local) {
        this.local = local;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("medium")
    public String medium;
    public Spin withMedium(String medium) {
        this.medium = medium;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("new")
    public Boolean new_;
    public Spin withNew(Boolean new_) {
        this.new_ = new_;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("note")
    public String note;
    public Spin withNote(String note) {
        this.note = note;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("performers")
    public String performers;
    public Spin withPerformers(String performers) {
        this.performers = performers;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("playlist_id")
    public Long playlistId;
    public Spin withPlaylistId(Long playlistId) {
        this.playlistId = playlistId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("release")
    public String release;
    public Spin withRelease(String release) {
        this.release = release;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("release-custom")
    public String releaseCustom;
    public Spin withReleaseCustom(String releaseCustom) {
        this.releaseCustom = releaseCustom;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("released")
    public Long released;
    public Spin withReleased(Long released) {
        this.released = released;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("request")
    public Boolean request;
    public Spin withRequest(Boolean request) {
        this.request = request;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("song")
    public String song;
    public Spin withSong(String song) {
        this.song = song;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("start")
    public OffsetDateTime start;
    public Spin withStart(OffsetDateTime start) {
        this.start = start;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("timezone")
    public String timezone;
    public Spin withTimezone(String timezone) {
        this.timezone = timezone;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("upc")
    public String upc;
    public Spin withUpc(String upc) {
        this.upc = upc;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("va")
    public Boolean va;
    public Spin withVa(Boolean va) {
        this.va = va;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("work")
    public String work;
    public Spin withWork(String work) {
        this.work = work;
        return this;
    }
}